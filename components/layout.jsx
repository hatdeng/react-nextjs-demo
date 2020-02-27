import Link from 'next/link'
import { Button } from "antd"
export default ({ children }) => (
    <>
    <header>
        <Link href="/">
            <a>
            <Button className="primary">go to HomePage</Button>
            </a>
        </Link>
        <Link href="/a?id=10000" as="/a/10000">
            <a>
            <Button className="primary">go to AAA</Button>
            </a>
        </Link>
        <Link href="/test/b">
            <a>
            <Button className="primary">go to BBB</Button>
            </a>
        </Link>
    </header>
    
    {children}
    <footer>footer</footer>
    </>
)