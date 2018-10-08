import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { userLogin } from '../Actions/Index';
import { connect } from 'react-redux';



class Login extends Component {

    constructor(props){
        super(props);
    }

    onSubmit(values){
      this.props.userLogin(values);
    }

    componentWillReceiveProps(nextProps){
      if(nextProps.loginData.items){
        this.props.history.push('/home')
      }
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        const renderField = ({
            input,
            label,
            type,
            meta: {touched, error }
          }) => (
            <div className="form-group">
              <label htmlFor={label}>{label}</label>
                <input className="form-control" name={label}  {...input} type={type} placeholder={label} />
                {touched && error && <span>{error}</span>}
            </div>
          )
        return ( 
        <div>
            <h1>Login</h1>
            <form onSubmit= {handleSubmit(this.onSubmit.bind(this))}>
      <Field
        name="email"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
      />
      <div>
        <button type="submit" disabled={submitting}>
          Sign In
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
            </div>
        )
    }
}

const validate = values => {
    const errors = {}
    if (!values.username) {
      errors.username = 'Required'
    }
    if (!values.password) {
      errors.password = 'Required'
    }
    return errors
  }

  const mapStateToProps = state => ({
    loginData: state.login,
    loading: state.login.loading,
  });  

export default reduxForm({
    form: 'asyncValidation',
    validate
})(connect(mapStateToProps, { userLogin }) (Login));