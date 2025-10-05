import Swal from 'sweetalert2';
export default function Logout() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "want to log out?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Logout",
        cancelButtonText: "Cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Thank you for using our services! You have been successfully logged out.",
            text: "Feel free to return anytime. Have a great day!",
            icon: "success"
          });
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled logout.",
            text: "We're here whenever you're ready to leave. Stay connected!",
            icon: "error"
          });
        }
      });
    sessionStorage.removeItem('product')
    sessionStorage.removeItem('login')
    sessionStorage.removeItem('cart')
    return window.location.href='/';
  }
