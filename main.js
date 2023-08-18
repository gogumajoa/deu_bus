var data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']; //api로 정류소 명 받아오기

for (var i = 0; i < data.length; i++) {
    var box = document.createElement('div'); // box 요소 생성
    box.className = 'box'; // 클래스 설정

    var container = document.createElement('div');
    container.className='v-line-container';


    if(i!=data.length-1){
    var vLine = document.createElement('div'); // 수직선 div 요소 생성
    vLine.className = 'v-line'; // 클래스 설정
    container.appendChild(vLine);}

    var dot = document.createElement('div'); // 점 div 요소 생성
    dot.className = 'dot'; // 클래스 설정
    container.appendChild(dot)

    var text_container = document.createElement('div');
    text_container.className='text-container';

    var h2 = document.createElement('h2'); // h1 요소 생성
    h2.textContent = data[i]; // 텍스트 설정
    text_container.appendChild(h2);

    var p = document.createElement('p');
    p.textContent = data[i];
    text_container.appendChild(p);
    
    var hr = document.createElement('hr'); // hr 요소 생성

    var img = document.createElement('img');
    img.src = "./clock.JPG";
   
    
    box.appendChild(container);
    
    box.appendChild(text_container);
    box.appendChild(hr);
    
    box.appendChild(img);
    
    
    document.body.appendChild(box); // body에 box 추가
  
}