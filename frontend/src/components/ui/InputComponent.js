import { width } from '@mui/system';
import { Field } from 'formik';

const Input = (props) => {
    const { name, placeholder, label } = props
    console.log(name);
    return (
        <Field
            name={name}
            placeholder={name}

        >
            {(props) => {
                const { field, meta, form } = props

                return (
                    <div>
                        <label style={{
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '18px',
                            lineWeight: '22px',
                        }}>{label}</label>
                        <input style={{
                            padding: '5px 0px 5px 5px',
                            width: '98%',
                            margin: '5px',
                            border: '0.5px solid #A5A5A5',
                            borderRadius: '4px',
                        }}
                            type="text" placeholder={placeholder} {...field} />
                        {
                            meta.touched && meta.error && (
                                <div
                                    style={{
                                        fontFamily: 'Cabinet Grotesk',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: '15px',
                                        lineHeight: '14px',
                                        color: '#B47376',
                                        textAlign: 'center'

                                    }}
                                    className="error">{meta.error}</div>
                            )
                        }
                    </div>)
            }}
        </Field >

    )
}

export default Input;
