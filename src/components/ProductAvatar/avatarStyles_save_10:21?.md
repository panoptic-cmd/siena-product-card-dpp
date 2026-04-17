.cardContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff; /* Cor escura de fundo para destacar o card */
  padding: 40px 20px;
}

.itemTitle {
  color: #000000;
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0;
}

.Wrapper {
    display: flex;
     flex-direction: row;
     align-items: center;
     gap: 20px;
 
  max-width: 600px;
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* .cardWrapper {
  max-width: 400px;
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  font-family: sans-serif;
  color: #333;
} */

.cardPicture img {
 
    flex: 0 0 45%;
  height: 350px;
  width: 300px;
  object-fit: cover;
  display: block;
}


.textContainer { /* Cria ou usa uma classe para o bloco de texto */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 20px;
}