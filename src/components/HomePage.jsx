import {HomePageStyle} from '../style/components'
export const HomePage = () => {
    return (
        <div className={HomePageStyle.login}>
            <form>
                <h1>Login</h1>
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

