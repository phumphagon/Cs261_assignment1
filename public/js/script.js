function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key': 'TU6c11ad3c3e8a28360b79dc1c27bc6b0621ea2dd3b7410f5c2d76d74c39c1106b0a5f3a176400bd358d81f97bac8eb139'
        },
        body: JSON.stringify({ UserName: username, PassWord: password })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.status === true){
         document.getElementById('message').innerText = data.message;
        document.getElementById('status').innerText = 'status : ' + data.status; 
        document.getElementById('type').innerText = 'You are : ' + data.type;
        document.getElementById('username').innerText = 'Your username : ' + data.username;
        document.getElementById('tu_status').innerText = 'สถานภาพนักศึกษา : ' + data.tu_status;
        document.getElementById('statusid').innerText = 'statusid : ' + data.statusid;
        document.getElementById('displayname_th').innerText = 'ชื่อ : ' + data.displayname_th;
        document.getElementById('displayname_en').innerText = 'Name : ' + data.displayname_en;
        document.getElementById('email').innerText = 'Email : ' + data.email;
        document.getElementById('department').innerText = 'หลักสูตร : ' + data.department;
        document.getElementById('faculty').innerText = 'คณะ : ' + data.faculty;
        }else{
            const popupBox = document.getElementById('popup-box');
            popupBox.style.display = 'block';

            const closeBtn = document.getElementById('close-btn');
            closeBtn.onclick = function() {
                popupBox.style.display = 'none';

        }
    } 
    })
 
    .catch(error => {
        console.error('Error:', error);
        // Optionally show an error message for fetch failures
        const popupBox = document.getElementById('popup-box');
        popupBox.style.display = 'block';
        document.getElementById('popup-box').innerText = 'An error occurred. Please try again.';
    });
}

