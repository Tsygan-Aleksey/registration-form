 function Radio({ label, value, checked, onChange }) {
    return (
        <label>
            <input type="radio" name="gender" value={value} checked={checked} onChange={onChange} />
            {label}
        </label>
    );
}

export const RadioGroup = ({ value: groupValue, options, onChange }) => {
    return (
        <div>
            {options.map(({ value, label }) => (
                <Radio value={value} label={label} checked={value === groupValue} onChange={onChange}/>
            ))}
        </div>
    );
};

