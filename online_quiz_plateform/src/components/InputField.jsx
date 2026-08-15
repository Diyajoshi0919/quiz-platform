function InputField({label, type, placeholder}) {
    return (
        <div className="input-field">
            <label>{label}</label>
            <input type={type} placeholder={placeholder} className='input-class'/>
        </div>
    );
}
export default InputField;  
           