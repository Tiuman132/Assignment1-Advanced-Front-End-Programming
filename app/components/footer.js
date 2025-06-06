export default function Footer(props){
    return(
        <div className="footer"> {/* footer wrapper */}
             <p>{props.footerText}</p> {/* props will send here and take the value */}
             
        </div>
    );
}