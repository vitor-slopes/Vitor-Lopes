import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import PageSection from './Components/PageSection/PageSection';
import BigCard from './Components/BigCard/BigCard';
import SmallCard from './Components/SmallCard/SmallCard';
import ImageButton from './Components/ImageButton/ImageButton';







function App() {
  return (
    <div className="App">
      <PageSection>
        <BigCard titulo='Vitor Soares Lopes'
          texto='Oi, eu sou o Vitor. Estudante da Future4'
          imagem='https://thumbs.dreamstime.com/z/bangladesh-january-worker-hands-full-turnip-savar-dhaka-171921437.jpg'
          imagemPost='data:image/jpeg;base64,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'
          botaoCurtir='data:image/jpeg;base64,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'
        />
      </PageSection>




      {/* <SmallCard titulo='Email:' texto='lopesssbr@gmail.com' imagem='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAZlBMVEUAAAD////8/Pzu7u74+PjU1NTMzMzY2Niqqqrq6uqysrLGxsYlJSW7u7vd3d2IiIidnZ1+fn5LS0twcHBfX18uLi4dHR0YGBiSkpJWVlbj4+MTExN2dnZQUFA5OTkLCwtERERnZ2e83WqjAAAD7UlEQVRoge2a2aKrIAxFxaGTdq6dp/P/P3nb01uzg6iAwHkxb1XrEkKSTTQSf2TRAB7AA3gAD+AB3AqOwzLjLzi9RkHtmn5HLOYhuXOaaiEWRShssRAIFuktDPeWCg4WYhmCu6xwEE4z/9wZ0SIIpaz0iy0ziKnoBORk45O7SYC7fi2zM/z26OglYNLPCHM45C2i5wAZH/4fXMFBPxH9jV55FW/R0Sf33BO694hnnlOfjmbu3fFzB1zqjiMaolec6yGLpzOHji5wSPlDcQVOSOIsdd/QvRP1NZhLhKMafRU697w0LHp7Q/8l95YLWZj3dnQxhtuNVO4lO+Ij7lov7bSdhnvJtildHPeK6GVsdieWS3o4mrlXa+4OI3S0LRfdu9At9BN8WKsazWqvQcVbw99sIppF77H7erInLDFzR6N7Y8Ni90Bdku1N/rrH5Dw1TwaYS0xqNKu9uTE24rlEP6IxesXKhvvKJUaZ52MYEPabwQ06eqThrQJTwLSPhsIbdUc0i95KStoZTt1bhbcZi/7eVXWrfbeZwTPqGJ+/xojeY3J2I5HZXit9qi9iqW7cpjVMrHsSmXsdboMwl6gimi1Bo6LQZTucyZFUXksMuvjHJfeVGlCXTJ94ikmWxP3mHjez6GjmXqui0GE4nxDRbOGJqVEB1bJMcBtf3kcvY+lwcnHMzYVs7xpwmtYOn92OeV4DvNbveq3qvjYnNwsjRy4UqLelVEGzfmUJjfJDzjaz4NpyTym9Y5dkx5VyCUxvQcdHPrhSY+zXPsm5dExeSdyotsS/ks4teaW6GTbGIItBbeydwqgusSVDeZK1j24UXz2lD63hjKekb8NbKgo7mghNPaw2GthZPlX+LrGalASypZqXuPUU/MiVWuPqgEwC86xMRhPlbEKZtNQiuw5uk4FOsuqhANew1PUjn6o/m29xgWws7DfEtVBRkGC2Zv98VpkgservAdlIdVLuSy37iiDFDPqD96q2ptZqlTSLfvsFuD02QVTCYs3md0Fa4mnPRT0caz0/cfWu1yJreGxfKda47wu/B5G71wo11nQ902LwaqcrKg+VfDVtBSoNWvTteQi6gW7et4EwVLxxqgyc4mqXCyHS8o6DuIYZto1MAjBrqnK5B66O6PUx3rfdYcyq8zRe1x/CbOK2MVNSd9CUk+zUQp555DLRKwlT2pj5+Tzhh8hsi0Fcp90xMOjFgigmodJD/XcYyO0KEoLLpOcqJLdGLo+BuEx6HkvIG765jJzTZ1W99rOaBu3lKCQX89QXHOpzwbkEDveZ4oiBfbSZmywDcICv9cByAof9BDaGqf4DG8ADeAAP4AE8gBvtHyUsMsb3y9ZiAAAAAElFTkSuQmCC' />
      <SmallCard titulo='Endereço:' texto='Av.Pinheiro MAchado' imagem='data:image/jpeg;base64,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' />
      <ImageButton texto='ver mais' imagem='https://cdn4.iconfinder.com/data/icons/arrow-sets-2/32/down-arrow-ico-512.png'/>
    </PageSection>
    <PageSection titulo='Experiências Profissionais'>
      <BigCard titulo='future4' texto='Formando desenvolvedores para o futuro' imagem='https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png' />
      <BigCard titulo='Banca de Jornal' texto='Vendendo jornais e revistas' imagem='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Banca_de_jornais_e_revistas_REFON.jpg/800px-Banca_de_jornais_e_revistas_REFON.jpg' />
      <ImageButton texto='Facebook' imagem='https://cdn3.iconfinder.com/data/icons/facebook-ui-flat/48/Facebook_UI-03-512.png' />
    </PageSection> */}

    </div>
  );
}

export default App;

