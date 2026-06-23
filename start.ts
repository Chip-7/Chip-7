const nickName = (
  nick: string,
  tanggalLahir: Date
): void => {

  const sekarang = new Date()

  let umur = sekarang.getFullYear() - tanggalLahir.getFullYear()

  const belumUlangTahun =
    sekarang.getMonth() < tanggalLahir.getMonth() ||
    (
      sekarang.getMonth() === tanggalLahir.getMonth() &&
      sekarang.getDate() < tanggalLahir.getDate()
    )

  if (belumUlangTahun) {
    umur--
  }

  console.log(`${nick} ${umur} tahun`)
}

nickName("Adzy ツ", new Date("2008-08-15"))
