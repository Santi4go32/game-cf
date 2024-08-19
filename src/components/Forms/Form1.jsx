import React from 'react';

const QQLogin = () => {
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const data = {
            fields: [
                {
                    name: "email",
                    value: email,
                },
                {
                    name: "firstname",
                    value: name,
                },
            ],
        };

        const hubspotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/46942081/8f430ff1-31a2-45e3-bab6-f782592096fd`;

        try {
            const response = await fetch(hubspotUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert("¡Formulario enviado con éxito!");
                localStorage.setItem('userEmail', email);
                window.location.href = "/";
            } else {
                alert("Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.");
            }
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            alert("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.");
        }
    };

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-image bg-cover bg-center bg-fixed">
            <form onSubmit={handleSubmit} className="flex-grow flex items-center justify-center md:w-[400px]">
                <div className="relative w-full max-w-[400px] bg-login-box backdrop-blur-login-box p-8 rounded-full shadow-xl border">
                    <div className="absolute top-[-70px] left-1/2 transform -translate-x-1/2 bg-[#0e1b4d] rounded-full p-6">
                        <img src="/cf.png" alt="QQ" className="w-16 h-16" />
                    </div>
                    <div className="mt-10">
                        <div className="mb-6">
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Nombre completo"
                                className="w-full mt-2 p-3 rounded-full bg-white border border-[#0e1b4d] text-black outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Correo electrónico'
                                className="w-full mt-2 p-3 rounded-full bg-white border border-[#0e1b4d] text-black outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className="w-full py-3 rounded-full bg-[#0e1b4d] text-white hover:bg-blue-700 transition relative top-12 shadow-lg font-bold">
                        JUGAR
                    </button>
                </div>
            </form>
            <footer className="mt-8 text-center text-white text-sm py-4 font-bold">
                Copyright ©2024 QQ Capital Fund. All rights reserved.
            </footer>
        </div>
    );
};

export default QQLogin;
