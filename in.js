const nickName = (nick, tahunLahir) => {
   let umur = new Date().getFullYear() - tahunLahir
  console.log(nick, umur)
}

nickName("Adzy ツ", 2008)
