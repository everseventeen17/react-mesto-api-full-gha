import React from 'react';

export function Login({handleLogin}) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');


    function handleInputPassword(e) {
        setPassword(e.target.value);
    }

    function handleInputEmail(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleLogin({email, password});
    }

    return (
        <div className="authentication">
            <h2 className="authentication__title">Вход</h2>
            <form onSubmit={handleSubmit} className="authentication__form authentication__form_registration"
                  name="registration" method="post">

                <input onChange={handleInputEmail} value={email || ''}
                    className="authentication__input-text authentication__input-text_email"
                    placeholder="Email" name="email"></input>
                <span className="authentication__error authentication__error_email">11</span>

                <input onChange={handleInputPassword} value={password || ''}
                    className="authentication__input-text authentication__input-text_password"
                    placeholder="Пароль" type="password" name="password" autoComplete="off" ></input>
                <span className="authentication__error authentication__error_password">11</span>

                <button className="authentication__submit-btn">Войти</button>
            </form>
        </div>
    );
};
