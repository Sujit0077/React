import { forwardRef, useImperativeHandle, useRef } from "react"
import {createPortal} from "react-dom"
const Modal = forwardRef(function Modal({ targetTime, remainingTime,onReset }, ref) {

    const dialog = useRef()
    const userLost=remainingTime <= 0;
    const formatRemainingTime=(remainingTime/1000).toFixed(2)
    const score=Math.round((1-remainingTime/(targetTime*1000))*100);
    useImperativeHandle(ref, () => {
        return {
            open1() {
                dialog.current.showModal();
            }
        }
    });
    return createPortal(
        <dialog className="result-modal" ref={dialog} onClose={onReset}>
            <h2>
                {/* Your Score: You {userLost?"Lost":"won"} */}
                {userLost ? <h2>You Lost </h2>:<h2>You Won {score}</h2>}
            </h2>
            <p>
                The target was <strong>{targetTime} second{targetTime > 1 ? 's' : ''}</strong>
            </p>
            <p>
                You Stopped the timer with <strong>{formatRemainingTime} second{formatRemainingTime>1?'s':''} left</strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button >Close</button>
            </form>
        </dialog>,document.getElementById("modal")
    )
})
export default Modal