import {css} from '../../../styled-system/css'

const styled = css({
    fontSize:'4xl',
    fontWeight:'bold'
})

export default function AtomicStyle() {
    return (
        <div className={styled}>
            Atomic style CSS Hello.
        </div>
    )
}
