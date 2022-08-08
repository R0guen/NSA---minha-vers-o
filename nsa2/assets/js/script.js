// Funções para cookies
function cria_cookie(nome, valor) {
    var data = new Date(2030,0,01);
    data = data.toGMTString();
    valor = encodeURI(valor);
    document.cookie = nome + '=' + valor + '; expires=' + data + '; path=/';
}

function apaga_cookie(nome){
    var data = new Date(2010,0,01);
    data = data.toGMTString();
    document.cookie = nome + '=; expires=' + data + '; path=/';
}

function valor_cookie(nome_cookie) {
    var cname = ' ' + nome_cookie + '=';
    var cookies = document.cookie;
    if (cookies.indexOf(cname) == -1) {
        return false;
    }
    cookies = cookies.substr(cookies.indexOf(cname), cookies.length);
    if (cookies.indexOf(';') != -1) {
        cookies = cookies.substr(0, cookies.indexOf(';'));
    }
    cookies = cookies.split('=')[1];
    return decodeURI(cookies);
}


// Troca de tema (claro e escuro)
const ThemeToggler = document.querySelector(".theme");
const LightTheme = document.querySelector(".light");
const DarkTheme = document.querySelector(".dark");
var Theme = 2;
const tema = 'Tema da página';

ThemeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    ThemeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    ThemeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
    
    if (DarkTheme.classList.contains("active")) {
        Theme = 2;
    } else if (LightTheme.classList.contains("active")){
        Theme = 1;
    }

    cria_cookie(tema, Theme);
})


if (valor_cookie(tema) == 2) {
    document.body.classList.toggle('dark-theme-variables');
    ThemeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    ThemeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
} 



// Desativa o aviso de notificações novas
const Notific = document.querySelector(".notific");

Notific.addEventListener('click', () => {
    Notific.classList.remove('warning');
})


// Materias de hoje
const d = new Date();
let day = d.getDay();

switch(day) {
    case 0:
        const ul1 = document.createElement('ul');
        const liContentDom = `
                            <li> Hoje não há aula</li>
                        `;
        ul1.innerHTML = liContentDom;
        document.querySelector('#materias_hoje').appendChild(ul1);
        break;
    case 1:
        const ul2 = document.createElement('ul');
        const liContentSeg = `
                            <li>${Segunda[0]}</li>                                
                            <li>${Segunda[1]}</li>                                
                            <li>${Segunda[2]}</li>                                
                            <li>${Segunda[3]}</li>                                
                            <li>${Segunda[4]}</li>                                
                            <li>${Segunda[5]}</li>                                
                            <li>${Segunda[6]}</li>                                
                            <li>${Segunda[7]}</li>
                        `;
        ul2.innerHTML = liContentSeg;
        document.querySelector('#materias_hoje').appendChild(ul2);
        break;
    case 2:
        const ul3 = document.createElement('ul');
        const liContentTer = `
                            <li>${Terca[0]}</li>                                
                            <li>${Terca[1]}</li>                                
                            <li>${Terca[2]}</li>                                
                            <li>${Terca[3]}</li>                                
                            <li>${Terca[4]}</li>                                
                            <li>${Terca[5]}</li>                                
                            <li>${Terca[6]}</li>                                
                            <li>${Terca[7]}</li>
                        `;
        ul3.innerHTML = liContentTer;
        document.querySelector('#materias_hoje').appendChild(ul3);
        break;
    case 3:
        const ul4 = document.createElement('ul');
        const liContentQua = `
                            <li>${Quarta[0]}</li>                                
                            <li>${Quarta[1]}</li>                                
                            <li>${Quarta[2]}</li>                                
                            <li>${Quarta[3]}</li>                                
                            <li>${Quarta[4]}</li>                                
                            <li>${Quarta[5]}</li>                                
                            <li>${Quarta[6]}</li>                                
                            <li>${Quarta[7]}</li>
                        `;
        ul4.innerHTML = liContentQua;
        document.querySelector('#materias_hoje').appendChild(ul4);
        break;
    case 4:
        const ul5 = document.createElement('ul');
        const liContentQui = `
                            <li>${Quinta[0]}</li>                                
                            <li>${Quinta[1]}</li>                                
                            <li>${Quinta[2]}</li>                                
                            <li>${Quinta[3]}</li>                                
                            <li>${Quinta[4]}</li>                                
                            <li>${Quinta[5]}</li>                                
                            <li>${Quinta[6]}</li>                                
                            <li>${Quinta[7]}</li>
                        `;
        ul5.innerHTML = liContentQui;
        document.querySelector('#materias_hoje').appendChild(ul5);
        break;
    case 5:
        const ul6 = document.createElement('ul');
        const liContentSex = `
                            <li>${Sexta[0]}</li>                                
                            <li>${Sexta[1]}</li>                                
                            <li>${Sexta[2]}</li>                                
                            <li>${Sexta[3]}</li>                                
                            <li>${Sexta[4]}</li>                                
                            <li>${Sexta[5]}</li>                                
                            <li>${Sexta[6]}</li>                                
                            <li>${Sexta[7]}</li>
                        `;
        ul6.innerHTML = liContentSex;
        document.querySelector('#materias_hoje').appendChild(ul6);
        break;
    case 6:
        const ul7 = document.createElement('ul');
        const liContentSab = `
                            <li> Hoje não há aula </li> 
                        `;
        ul7.innerHTML = liContentSab;
        document.querySelector('#materias_hoje').appendChild(ul7);
        break;
}