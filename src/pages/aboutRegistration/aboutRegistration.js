import React, { Component } from 'react';
import './styles.css';
import countries from '../../api/countries.js';
import cities from '../../api/cities.js';
import Field from '../../components/Field';
import avatarDefault from "../../assets/img/images/default-avatar.png";


class Steps extends Component {
  render() {
    const {activeStep, steps} = this.props;
    return (
      <div className="steps mb-4">
        {
          steps.map((step)=> (
            <div key={step.name} className={'step' + (step.isActive ? ' is-active' : '') + (step.isCompleted ? ' is-completed' : '')}>
              <div className="step__marker">{steps.indexOf(step) + 1}</div>
              <div className="step__title">{step.name}</div>
            </div>
          ))
        }
        {/*<div className="steps__line"></div>*/}
      </div>
    )
  }
}

class BackForward extends Component {
  render() {
    const {activeStep, goNextStep, goPrevStep, reset} = this.props;
    return (
      <React.Fragment>
        {
          activeStep !== 3
          ? <div className="d-flex justify-content-center">
              <button 
                type="button"
                className="btn btn-light mr-4"
                disabled={activeStep === 0 ? true : false}
                onClick={goPrevStep}
              >Previous</button>
              <button 
                type="button"
                className="btn btn-secondary"
                onClick={(event)=>{goNextStep(event, activeStep)}}
              >Next</button>
            </div>
          : <div className="d-flex justify-content-center">
              <button 
                type="button"
                className="btn btn-primary"
                onClick={reset}
              >Reset</button>
            </div>
        }
      </React.Fragment>
    )
  }
}

class Basic extends Component {
  render() {
    const {
      errors,
      onChange,
      values: {
        firstname,
        lastname,
        password,
        repeatPassword,
        gender
      },
    } = this.props;
    return (
      <div>
        <Field
          id="firstname"
          labelText="Firstname" 
          type="text" 
          placeholder="Enter firstname" 
          name="firstname"
          value={firstname}
          onChange={onChange}
          error={errors.firstname}
        />
        <Field
          id="lastname"
          labelText="Lastname" 
          type="text" 
          placeholder="Enter lastname" 
          name="lastname"
          value={lastname}
          onChange={onChange}
          error={errors.lastname}
        />
        <Field
          id="password"
          labelText="Password" 
          type="password" 
          placeholder="Enter password" 
          name="password"
          value={password}
          onChange={onChange}
          error={errors.password}
        />
        <Field
          id="repeatPassword"
          labelText="Repeat password" 
          type="password" 
          placeholder="Enter repeat password" 
          name="repeatPassword"
          value={repeatPassword}
          onChange={onChange}
          error={errors.repeatPassword}
        />
        <fieldset className="form-group">
          <div>Gender</div>
          <div className="custom-control custom-radio">
            <input 
              className={"custom-control-input" + (errors.gender ? ' error' : '')}
              type="radio" 
              id="male" 
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={onChange}
            />
            <label className="custom-control-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input 
              className={"custom-control-input" + (errors.gender ? ' error' : '')}
              type="radio" 
              id="female" 
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={onChange}
            />
            <label className="custom-control-label" htmlFor="female">
              Female
            </label>
          </div>
        </fieldset>
      </div>
    )
  }
}

class Contacts extends Component {
  render() {
    const {
      errors,
      onChange,
      getOptionsItems,
      getCities,
      values: {
        country,
        city,
        mobile,
        email,
      },
    } = this.props;
    return (
      <React.Fragment>
        <Field
          id="email"
          labelText="Email" 
          type="text" 
          placeholder="Enter email" 
          name="email"
          value={email}
          onChange={onChange}
          error={errors.email}
        />
        <Field
          id="mobile"
          labelText="Mobile" 
          type="text" 
          placeholder="Enter mobile" 
          name="mobile"
          value={mobile}
          onChange={onChange}
          error={errors.mobile}
        />
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select 
            className={"custom-select" + (errors.country ? ' error' : '')}
            id="country"
            name="country"
            value={country}
            onChange={onChange}
            error={errors.country}
          >  
            {getOptionsItems(countries)}
          </select>
          {errors.country ? (
            <div className="invalid-feedback">
              {errors.country}
            </div>
          ) : null }
          <label htmlFor="city">City</label>
          <select 
            className={"custom-select" + (errors.city ? ' error' : '')}
            id="city"
            name="city"
            value={city}
            onChange={onChange}
            error={errors.city}
          >  
            <option key="0" value="">Select city</option>
            {getCities(cities, country)}
          </select>
          {errors.city ? (
            <div className="invalid-feedback">
              {errors.city}
            </div>
          ) : null }
        </div>
      </React.Fragment>
    )
  }
}

class Avatar extends Component {
  render() {
    const {
      errors,
      onChange,
      onChangeAvatar,
      onChangeCheckbox,
      decrementAge,
      incrementAge,
      values: {
        avatar,
        agreePp, 
        agreeToU,
        age
      },
    } = this.props;
    return (
      <React.Fragment>
        <div className="form-group">
          <img className="mb-4" width="100%" src={avatar ? avatar : avatarDefault} alt=""></img>
          <div className="mb-4">
            <div className="custom-file">
              <input 
                type="file" 
                className="custom-file-input"
                id="avatar" 
                name="avatar"
                onChange={onChangeAvatar}  
              />
              <label className={"custom-file-label" + (errors.avatar ? ' error' : '')} htmlFor="avatar">Choose avatar</label>
              {errors.avatar ? (
                <div className="invalid-feedback">
                  {errors.avatar}
                </div>
              ) : null }
            </div>
          </div>
        </div>
        <div className="form-group">
          <div>
            <label>Age</label>
          </div>
          <div className="btn-group">
            <button 
              className="btn btn-secondary"
              type="button"
              onClick={decrementAge}  
            >
              -
            </button>
            <input
              type="number"
              className={"form-control" + (errors.age ? ' error' : '')}
              placeholder="Enter age"
              name="age"
              value={age}
              onChange={onChange}
            />
            <button 
              className="btn btn-secondary"
              type="button"
              onClick={incrementAge}  
            >
              +
            </button>
          </div>
          {errors.age ? (
            <div className="invalid-feedback">
              {errors.age}
            </div>
          ) : null }
        </div>
        <div className="custom-control custom-checkbox mb-2">
          <input 
            className="custom-control-input"
            type="checkbox"
            id="agreePp"
            name="agreePp"
            value={agreePp}
            onChange={onChangeCheckbox}
            checked={agreePp === true}   
          />
          <label className="custom-control-label" htmlFor="agreePp">
            Agree with Privacy policy
          </label>
          {errors.agreePp ? (
            <div className="invalid-feedback">
              {errors.agreePp}
            </div>
          ) : null }
        </div>
        <div className="custom-control custom-checkbox mb-2">
          <input 
            className="custom-control-input"
            type="checkbox"
            id="agreeToU"
            name="agreeToU"
            value={agreeToU}
            onChange={onChangeCheckbox}
            checked={agreeToU === true}   
          />
          <label className="custom-control-label" htmlFor="agreeToU">
            Agree with Terms of use
          </label>
          {errors.agreeToU ? (
            <div className="invalid-feedback">
              {errors.agreeToU}
            </div>
          ) : null }
        </div>
      </React.Fragment>
    )
  }
}

class Finish extends Component {
  render() {
    const {
      getLocationItem,
      values: {
        avatar,
        firstname,
        lastname,
        country,
        city,
        mobile,
        email,
      },
    } = this.props;
    return (
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-4">
            <img width="100%" src={avatar} alt=""></img>
          </div>
          <div className="col-8 d-flex align-items-center">
            <h4>{firstname} {lastname}</h4>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12">
            <p>
              <strong>Email: </strong> {email}
            </p>
            <p>
              <strong>Mobile: </strong> {mobile}
            </p>
            <p>
              <strong>Location: </strong> 
              {getLocationItem(countries, country)}, {cities[city].name}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

class AboutRegistration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
      steps: [
        {
          isActive: true,
          isCompleted: false,
          name: "Basic"
        },
        {
          isActive: false,
          isCompleted: false,
          name: "Contacts"
        },
        {
          isActive: false,
          isCompleted: false,
          name: "Avatar"
        },
        {
          isActive: false,
          isCompleted: false,
          name: "Finish"
        },
      ],
      values: {
        firstname: "",
        lastname: "",
        password: "",
        repeatPassword: "",
        gender: "male",
        country: "1",
        city: "",
        mobile: "",
        email: "",
        agreePp: true,
        agreeToU: true,
        avatar: "",
        age: 0,
      },
      errors: {
        firstname: false,
        lastname: false,
        password: false,
        repeatPassword: false,
        gender: false,
        country: false,
        city: false,
        mobile: false,
        email: false,
        agreePp: false,
        agreeToU: false,
        avatar: false,
        age: false,
      },
    }
  };

  onChange = (event) => {
    this.setState({
      values: {
        ...this.state.values,
        [event.target.name]: event.target.value
      }
    })
  }
  onChangeCheckbox = (event) => {
    this.setState({
      values: {
        ...this.state.values,
        [event.target.name]: event.target.checked,
      }
    })
  };

  onChangeStep = (event) => {
    console.log(event.target.name, event.target.value, event.target.checked);
    this.state.steps.forEach(
      (step, i) => {
        if ( i == this.state.activeStep ) {
          this.setState({
            steps: {
              ...this.state.steps,
              [i]: {
                isActive: true,
              }
            }
          })
        }
      }
    )
  }

  // конвертируем загружаемую картинку в формат В64
  // чтобы передать на сервер и использовать как src, 
  // также для загрузки файлов в INPUT не нужно указывать VALUE 
  onChangeAvatar = (event) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      this.setState({
        values: {
          ...this.state.values,
          avatar: event.target.result
        }
      })
    };

    reader.readAsDataURL(event.target.files[0]);
  };

  getOptionsItems = (items) => {
    return items.map(item=> (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  };

  getLocationItem = (items, id) => {
    let x = items.filter((item)=> {
      return item.id == id
    });
    return x[0].name;
  };

  getCities = (cities, country) => {
    const citiesArr = [];
    for (let i = 1; cities[i] !== undefined; i++) {
      if (cities[i].country === Number(country)) {
        citiesArr.push(
          <option key={i} value={i}>
            {cities[i].name}
          </option>
        )
      }
    }
    return citiesArr;
  };

  incrementAge = () => {
    this.setState(
      prevState => ({
        values: {
          ...this.state.values,
          age: prevState.values.age + 1 
        }
      }),
      () => {
        if (this.state.values.age < 3) {
          this.setState({
            errors: {
              age: "Must be more then 3 years"
            }
          });
        } else {
          this.setState({
            errors: {
              age: false
            }
          });
        }
        console.log("Age", this.state.values.age)
      }
    );
  };
  
  decrementAge = () => {
    this.setState(
      prevState => ({
        values: {
          ...this.state.values,
          age: prevState.values.age - 1 
        }
      }),
      () => {
        if (this.state.values.age < 3) {
          this.setState({
            errors: {
              age: "Must be more then 3 years"
            }
          });
        } else {
          this.setState({
            errors: {
              age: false
            }
          });
        }
        console.log("Age", this.state.values.age)
      }
    );
  };

  goNextStep = (event, activeStep) => {
    event.preventDefault();

    const errors = {};

    if ((activeStep == 0) && (this.state.values.firstname.length < 5)) {
      errors.firstname = "Must be 5 characters or more";
    }
    if ((activeStep == 0) && (this.state.values.lastname.length < 5)) {
      errors.lastname = "Must be 5 characters or more";
    }
    if ((activeStep == 0) && (this.state.values.password.length < 6)) {
      errors.password = "Must be 6 characters or more";
    }
    if ((activeStep == 0) && (this.state.values.password.length !== this.state.values.repeatPassword.length)) {
      errors.repeatPassword = "Must be equal password";
    }
    if ((activeStep == 1) && (this.state.values.mobile.length < 10)) {
      errors.email = "Invalid email address";
    }
    if ((activeStep == 1) && (this.state.values.mobile.length < 10)) {
      errors.mobile = "Invalid mobile";
    }
    if ((activeStep == 1) && (this.state.values.country.length < 1)) {
      errors.country = "Required";
    }
    if ((activeStep == 1) && (this.state.values.city.length < 1)) {
      errors.city = "Required";
    }
    if ((activeStep == 2) && (this.state.values.avatar < 1)) {
      errors.avatar = "Required";
    }
    if ((activeStep == 2) && (this.state.values.age < 16)) {
      errors.age = "You should be older than 15";
    }
    if ((activeStep == 2) && (this.state.values.agreePp !== true)) {
      errors.agreePp = "You should accept Privacy policy for using this site";
    }
    if ((activeStep == 2) && (this.state.values.agreeToU !== true)) {
      errors.agreeToU = "You should accept Terms of use for using this site";
    }

    if(Object.keys(errors).length > 0) {
      this.setState({
        errors: errors
      });
    } else {
      let stepsT = this.state.steps;
        stepsT[activeStep] = {
          ...stepsT[activeStep],
          isActive: !stepsT[activeStep].isActive,
          isCompleted: !stepsT[activeStep].isCompleted
        }
        stepsT[activeStep+1] = {
          ...stepsT[activeStep+1],
          isActive: !stepsT[activeStep+1].isActive,
        }
        console.log(stepsT[activeStep])
      this.setState(
        prevState => ({
          activeStep: prevState.activeStep + 1,
          steps: stepsT,
          errors: {} 
        })
      );
      console.log("submit", this.state);
    }
  }

  goPrevStep = () => {
    this.setState(
      prevState => ({
        activeStep: prevState.activeStep - 1 
      })
    )
  }

  reset = () => {
    this.setState({
      activeStep: 0,
      steps: [
        {
          isActive: true,
          isCompleted: false,
          name: "Basic"
        },
        {
          isActive: false,
          isCompleted: false,
          name: "Contacts"
        },
        {
          isActive: false,
          isCompleted: false,
          name: "Avatar"
        },
        {
          isActive: false,
          isCompleted: false,
          name: "Finish"
        },
      ],
      values: {
        firstname: "",
        lastname: "",
        password: "",
        repeatPassword: "",
        gender: "male",
        country: "1",
        city: "",
        mobile: "",
        email: "",
        agreePp: true,
        agreeToU: true,
        avatar: "",
        age: 0,
      }
    })
  }

  render() {
    return (
      <div className="contacts py-4">
        <div className="form-container card">
          <form className="form card-body">
            <Steps 
              activeStep={this.state.activeStep}
              steps={this.state.steps}
            />
            {
              this.state.activeStep === 0
              ? <Basic 
                  values={this.state.values}
                  errors={this.state.errors}
                  onChange={this.onChange}
                /> 
              : this.state.activeStep === 1
              ? <Contacts 
                  values={this.state.values}
                  errors={this.state.errors}
                  onChange={this.onChange}
                  getOptionsItems={this.getOptionsItems}
                  getCities={this.getCities}
                />
              : this.state.activeStep === 2
              ? <Avatar 
                  values={this.state.values}
                  errors={this.state.errors}
                  onChange={this.onChange}
                  onChangeAvatar={this.onChangeAvatar}
                  onChangeCheckbox={this.onChangeCheckbox}
                  decrementAge={this.decrementAge}
                  incrementAge={this.incrementAge}
                  onSubmit={this.onSubmit}
                />
              : this.state.activeStep === 3
              ? <Finish
                  values={this.state.values}
                  getLocationItem={this.getLocationItem}
                />
              : "NO CONTENT"
            }
            <BackForward 
              activeStep={this.state.activeStep} 
              goNextStep={this.goNextStep}
              goPrevStep={this.goPrevStep}
              reset={this.reset}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default AboutRegistration;