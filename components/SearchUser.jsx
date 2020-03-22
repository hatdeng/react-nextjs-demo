import { useState, useCallback, useRef } from 'react';
import { Select, Spin } from 'antd'
import debounce from 'lodash/debounce'

import api from '../lib/api'

const Option = Select.Option

function SearchUser ({onChange, value}) {
    const lastFetchIdRef = useRef(0)
    const [fetching, setFetching] = useState(false)
    const [options, SetOptions] = useState([])

    const fetchUser = useCallback(debounce(value => {
        console.log('fetch User', value)
        lastFetchIdRef.current += 1
        const fetchId = lastFetchIdRef.current
        setFetching(true)
        SetOptions([])

        api.request({
            url: `/search/users?q=${value}`
        })
        .then(resp=>{
            console.log('user:', resp)
            if(fetchId !== lastFetchIdRef.current) {
                return ;
            }
            const data = resp.data.items.map(user =>({
                text: user.login,
                value: user.login
            }))

            setFetching(false)
            SetOptions(data)
        })
    }, 500), [])

    const handleChange = (value)=> {
        setOptions([])
        setFetching(false)
        onChange(value)
    }
    return <Select
        style={{width: 200 }}
        showSearch={true}
        notFoundContent={fetching ? <Spin size="small" />: <span>Nothing</span>}
        filterOption={false}
        placeholder="创建者"
        value={value}
        onChange={handleChange}
        onSearch={fetchUser}
        allowClear={true}        
    >
        {
            options.map(op=>(
                <Option value={op.value} key={op.value}>{op.text}</Option>
            ))
        }
    </Select>
}

export default SearchUser