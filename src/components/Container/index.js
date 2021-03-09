import style from './style.css';

const Container = (props)=>{
    const {children} = props
    return <div class={style.container}>{children}</div>
}

export default Container