prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

//create your model and store it in var classifier 
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-Tyx_SDyM/model.json',modelLoaded)
//define function modelLoaded
function modelLoaded(){
    console.log("model Loaded!!");
}
//define function check() 
function check(){
    classifier.classify("captured_image",gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error)
    }else{
        console.log(results);
        document.getElementById("status").innerHTML=results[0].label;
        prediction_1=result[0].label;
        if(results[0].label==Mask){
            document.getElementById("update_emoji").innerHTML="&#x1F637;";
        }else{
            document.getElementById("update_emoji").innerHTML="&#x26d4;";
        }
    }
}

//define function gotResult(error, results)
