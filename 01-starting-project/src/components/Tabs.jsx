export default function Tabs({children,buttons,buttonContainer}){
    const Buttonc=buttonContainer;
    console.log(Buttonc)
    return(
        <>
            <Buttonc>
                {buttons}
            </Buttonc>
            {children}
        </>
    );
}