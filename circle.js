
document.getElementById('Gd').addEventListener('change', function() {
    var selectedValue = this.value;
    var circle1 = document.getElementById('gg-d1');
    var circle2 = document.getElementById('gg-d2');
    var circle3 = document.getElementById('gg-d3');
    console.log('Selected Value:', selectedValue);
    if (selectedValue === '1') {
        circle1.style.color = '#00DBB6';
        circle2.style.color = 'gainsboro';
        circle3.style.color = 'gainsboro';
    } else if (selectedValue === '2') {
        circle1.style.color = 'lime';
        circle2.style.color = 'lime';
        circle3.style.color = 'gainsboro';
    } else if (selectedValue === '3') {
        circle1.style.color = '#00DBB6';
        circle2.style.color = '#00DBB6';
        circle3.style.color = '#00DBB6';
    } else {
        circle1.style.color = 'gainsboro';
        circle2.style.color = 'gainsboro';
        circle3.style.color = 'gainsboro';
    }
});
document.getElementById('Gs').addEventListener('change', function() {
  var selectedValue = this.value;
  if (selectedValue === '1') {
    document.getElementById('gg-s1').style.color = '#00DBB6';
    document.getElementById('gg-s2').style.color = 'gainsboro';
    document.getElementById('gg-s3').style.color = 'gainsboro';
    document.getElementById('gg-s4').style.color = 'gainsboro';

  } else if (selectedValue === '2') {
    document.getElementById('gg-s1').style.color = '#00DBB6';
    document.getElementById('gg-s2').style.color = '#00DBB6';
    document.getElementById('gg-s3').style.color = 'gainsboro';
    document.getElementById('gg-s4').style.color = 'gainsboro';

  } else if (selectedValue === '3') {
    document.getElementById('gg-s1').style.color = '#00DBB6';
    document.getElementById('gg-s2').style.color = '#00DBB6';
    document.getElementById('gg-s3').style.color = '#00DBB6';
    document.getElementById('gg-s4').style.color = 'gainsboro';
  } else if (selectedValue === '4') {
    document.getElementById('gg-s1').style.color = '#00DBB6';
    document.getElementById('gg-s2').style.color = '#00DBB6';
    document.getElementById('gg-s3').style.color = '#00DBB6';
    document.getElementById('gg-s4').style.color = '#00DBB6';
  } else {
    document.getElementById('gg-s1').style.color = 'gainsboro';
    document.getElementById('gg-s2').style.color = 'gainsboro';
    document.getElementById('gg-s3').style.color = 'gainsboro';
    document.getElementById('gg-s4').style.color = 'gainsboro';
  }

});