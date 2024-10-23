function fonction(){
    document.getElementById('btn').innerHTML = document.getElementById('TextArea').value
    document.getElementById('TextArea').value = null

};
document.getElementById('TextArea').addEventListener('input', function(){
document.getElementById('btn').innerHTML = document.getElementById('TextArea').value
})