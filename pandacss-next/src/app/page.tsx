import {css} from '../../styled-system/css'

const styled = css({
    fontSize:'8xl',
    fontWeight:'bold'
});

export default function Atomic() {
    return (
      <main>
        //定数化したものを当てはめる.
        <div className = {styled}>
            Hello World
        </div>
        //tailwind的な感じで書いたもの.
        <div className ={css({
          fontSize:'8xl',
          fontWeight:'bold'
        })}>
          Hello World
        </div>
      </main>
    );
};