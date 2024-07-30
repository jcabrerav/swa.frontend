import React from 'react'; 
import { validateEmail } from '../../utils/helper';
import { useState } from 'react';
import PasswordInput from '../../components/Input/PasswordInput';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handlelogin = async(e)=>{
        e.preventDefault();
        if(!validateEmail(username)){
            setError("Ingresar su cuenta de correo corporativa");
            return;
        }
        if(!password){
            setError("Ingresar contraseña de usuario");
            return;
        }
        setError("")
    };
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      <div className="hidden lg:block lg:w-9/12 bg-cover bx-left">
        <div className="flex pull-bottom bg-caption">
          <div className="text-white text-left p-10">
            <h1 className="text-3xl lg:text-5xl font-semibold mb-4 text-white">
              Kyklos: la forma más sencilla y rápida de hacer gestión eficiente.
            </h1>
            <p className="text-xs lg:text-sm">
              Nuestra Aplicación cuenta con una diversidad de funciones personalizables. Cada proceso es sólo modular y se ajusta a la necesidad del cliente. ©2019-2020 Todos los derechos reservados. Kyklos® es una empresa registrada de TekneSoft Ltda.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-3/12 w-full flex bg-white h-full bx-right">
        <div className="w-full box-form-login py-10 lg:py-40 px-5 lg:px-10 h-full flex flex-col justify-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-left pb-5">Iniciar Sesión</h2>
          <p className='text-xs lg:text-sm pb-5'>
            Autenticarse con su cuenta
          </p>
          <form onSubmit={handlelogin}>
            <div className='pb-5'> 
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                  placeholder="Usuario"
                  autoComplete="username" 
                  className="input-box"
                />
              </div>
            </div>
            <div className='pb-5'> 
              <div className="mt-1">
                <PasswordInput
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
            </div> 
            <div className='pb-5'>
                {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}
            </div>
            <div className="flex items-center justify-between pb-5">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Recordar Sesión
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">¿Olvidó su contraseña?</a>
              </div>
            </div>
            <div className='pb-5'>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Ingresar
              </button>
            </div>
          </form>
          <p className="text-xs lg:text-sm pull-bottom px-4 py-4">
            ©2019-2020 All Rights Reserved. Kyklos® is a registered TekneSoft Ltda. <a href="">Cookie Policy</a>, <a href=""> Privacy and Terms</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
