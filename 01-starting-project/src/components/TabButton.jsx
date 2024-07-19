export default function TabButton({children,isSelected,...props}){
    // console.log(onSelect)//function
    // console.log("Inside tab")
    return(
        <li>
            <button className={isSelected ? 'active':undefined} {...props}>
                {children} 
            </button>
        </li>
    )
}