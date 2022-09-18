function analizar() {
    let select = document.getElementById('month');
    let valeu = select.options[select.selectedIndex];
    let mes = valeu.value;
    var ftipo = document.getElementsByName('tipo');
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (ftipo[0].checked) {
        if (mes == "01"){ 
            res.innerHTML = 'Grécia!'
            img.setAttribute('src','gre.png')
            } else if (mes == "02"){ 
                res.innerHTML = 'Itália!'
                img.setAttribute('src','ita.png')
            } else if (mes == "03"){ 
                res.innerHTML = 'Alemanha!'
                img.setAttribute('src','ale.png')
            }  else if (mes == "04"){ 
                res.innerHTML = 'França!'
                img.setAttribute('src','fra.png')
            } else if (mes == "05"){ 
                res.innerHTML = 'Grécia!'
                img.setAttribute('src','gre.png')
            } else if (mes == "06"){ 
                res.innerHTML = 'Noruega!'
                img.setAttribute('src','nor.png')
            } else if (mes == "07"){ 
                res.innerHTML = 'República Tcheca!'
                img.setAttribute('src','rep.png')
            }  else if (mes == "08"){ 
                res.innerHTML = 'Suíça!'
                img.setAttribute('src','sui.png')
            } else if (mes == "09"){ 
                res.innerHTML = 'Áutria!'
                img.setAttribute('src','aus.png')
            }else if (mes == "10"){ 
                res.innerHTML = 'Inglaterra!'
                img.setAttribute('src','ing.png')
            }  else if (mes == "11"){ 
                res.innerHTML = 'Holanda!'
                img.setAttribute('src','hol.png')
            } else if (mes == "12"){ 
                res.innerHTML = 'Alemanha!'
                img.setAttribute('src','ale.png')
            }
    } else if (ftipo[1].checked) {
        if (mes == "01"){ 
            res.innerHTML = 'Espanha!'
            img.setAttribute('src','esp.png')
            } else if (mes == "02"){ 
                res.innerHTML = 'Holanda!'
                img.setAttribute('src','hol.png')
            } else if (mes == "03"){ 
                res.innerHTML = 'Crôacia!'
                img.setAttribute('src','cro.png')
            }  else if (mes == "04"){ 
                res.innerHTML = 'Crôacia!'
                img.setAttribute('src','cro.png')
            } else if (mes == "05"){ 
                res.innerHTML = 'Hungria!'
                img.setAttribute('src','hun.png')
            } else if (mes == "06"){ 
                res.innerHTML = 'Itália!'
                img.setAttribute('src','ita.png')
            } else if (mes == "07"){ 
                res.innerHTML = 'República Tcheca!'
                img.setAttribute('src','rep.png')
            }  else if (mes == "08"){ 
                res.innerHTML = 'Hungria!'
                img.setAttribute('src','hun.png')
            } else if (mes == "09"){ 
                res.innerHTML = 'Dinamarca!'
                img.setAttribute('src','din.png')
            }else if (mes == "10"){ 
                res.innerHTML = 'Escócia!'
                img.setAttribute('src','esc.png')
            }  else if (mes == "11"){ 
                res.innerHTML = 'Holanda!'
                img.setAttribute('src','hol.png')
            } else if (mes == "12"){ 
                res.innerHTML = 'Alemanha!'
                img.setAttribute('src','ale.png')
            }
    } if (ftipo[2].checked) {
        if (mes == "01"){ 
            res.innerHTML = 'Grécia!'
            img.setAttribute('src','gre.png')
            } else if (mes == "02"){ 
                res.innerHTML = 'Itália!'
                img.setAttribute('src','ita.png')
            } else if (mes == "03"){ 
                res.innerHTML = 'Espanha!'
                img.setAttribute('src','esp.png')
            }  else if (mes == "04"){ 
                res.innerHTML = 'França!'
                img.setAttribute('src','fra.png')
            } else if (mes == "05"){ 
                res.innerHTML = 'Suíça!'
                img.setAttribute('src','sui.png')
            } else if (mes == "06"){ 
                res.innerHTML = 'Dinamarca!'
                img.setAttribute('src','din.png')
            } else if (mes == "07"){ 
                res.innerHTML = 'Grécia!'
                img.setAttribute('src','gre.png')
            }  else if (mes == "08"){ 
                res.innerHTML = 'Espanha!'
                img.setAttribute('src','esp.png')
            } else if (mes == "09"){ 
                res.innerHTML = 'Áutria!'
                img.setAttribute('src','aus.png')
            }else if (mes == "10"){ 
                res.innerHTML = 'Escócia!'
                img.setAttribute('src','esc.png')
            }  else if (mes == "11"){ 
                res.innerHTML = 'França!'
                img.setAttribute('src','fra.png')
            } else if (mes == "12"){ 
                res.innerHTML = 'Itália!'
                img.setAttribute('src','ita.png')
            }
    } if (ftipo[3].checked) {
        if (mes == "01"){ 
            res.innerHTML = 'Suíça!'
            img.setAttribute('src','sui.png')
            } else if (mes == "02"){ 
                res.innerHTML = 'Itália!'
                img.setAttribute('src','ita.png')
            } else if (mes == "03"){ 
                res.innerHTML = 'Áustria!'
                img.setAttribute('src','aus.png')
            }  else if (mes == "04"){ 
                res.innerHTML = 'França!'
                img.setAttribute('src','fra.png')
            } else if (mes == "05"){ 
                res.innerHTML = 'Portugal!'
                img.setAttribute('src','por.png')
            } else if (mes == "06"){ 
                res.innerHTML = 'Espanha!'
                img.setAttribute('src','esp.png')
            } else if (mes == "07"){ 
                res.innerHTML = 'Portugal!'
                img.setAttribute('src','por.png')
            }  else if (mes == "08"){ 
                res.innerHTML = 'Inglaterra!'
                img.setAttribute('src','ing.png')
            } else if (mes == "09"){ 
                res.innerHTML = 'República Tcheca!'
                img.setAttribute('src','rep.png')
            }else if (mes == "10"){ 
                res.innerHTML = 'Hungria!'
                img.setAttribute('src','hun.png')
            }  else if (mes == "11"){ 
                res.innerHTML = 'Portugal!'
                img.setAttribute('src','por.png')
            } else if (mes == "12"){ 
                res.innerHTML = 'Alemanha!'
                img.setAttribute('src','ale.png')
            }
    }
    res.appendChild(img)

}
  
