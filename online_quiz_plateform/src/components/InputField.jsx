function InputField({label, type, placeholder,value, setValue}) {
    return (
        <div className="input-field">
            <label>{label}</label>
            <input type={type} placeholder={placeholder} className='input-class' value={value} onChange={(e) => setValue(e.target.value)}/>
        </div>
    );
}
export default InputField;  
           