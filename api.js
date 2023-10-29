FB.login(function(response) {
    if (response.status === 'connected') {
      // Đã đăng nhập thành công
      // Gửi tin nhắn xác nhận tham dự lễ cưới
      sendConfirmationMessage();
    } else {
      // Đăng nhập không thành công, xử lý lỗi
      console.log("Đăng nhập thất bại!");
    }
  }, {scope: 'public_profile,email,user_friends'});