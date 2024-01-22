const main = document.getElementById("main")
const fileName = document.getElementById("filename")
var oldmain = main.value
function newFile(){
  if(oldmain != main.value){
    if(window.confirm("Make a new document? Changes made to the previous document won't be saved")){
      main.value = ""
      fileName.value = ""
    }
    else{
      main.value = ""
      fileName.value = ""
    }
  }
}
function saveFile(){
  if(fileName.value == ""){
    window.alert("Give your text file a name.")
  } else if(main.value == ""){
    window.alert("Type something first")
  } else{
    let blob = new Blob([main.value], {type: "text"})
    let a = document.createElement("a")
    a.href = window.URL.createObjectURL(blob)
    a.download = `${fileName.value}.txt`
    a.click()
    window.URL.revokeObjectURL(a.href)
    oldmain = main.value
  }
}