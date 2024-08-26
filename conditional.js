    let mhs = {
        name: "Fulan",
        age: 20,
        major: "TRMG",
        skills: ['Sysadmin', 'OOP', 'Design'],
        poor: true, //miskin
    }
// conditional function
// kriteria : umur kurang dari 21, miskin, skill lebih dari 2

function cekKelulusan (mhs) {
    let age = mhs.age;
    let miskin = mhs.poor; 
    let skillslength = mhs.skills.length; 
  if (age < 21 && miskin == true && skillslength > 2) {
    //peserta lulus
    console.log("Peserta Lulus")
  } else if (age < 21 && miskin == true && skillslength <= 2) {
    console.log('Tambah Skill dulu')
  } else {
    //peserta tidak lulus
    console.log("Tidak Lulus")
  }
   
}
cekKelulusan(mhs)
