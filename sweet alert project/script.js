// Simple alert
document.getElementById('simpleAlert').addEventListener('click', function () {
    Swal.fire('Hello, world!');
  });
  
  // Success alert
  document.getElementById('successAlert').addEventListener('click', function () {
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Your work has been saved.',
    });
  });
  
  // Error alert
  document.getElementById('errorAlert').addEventListener('click', function () {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    });
  });
  
  // Confirmation dialog
  document.getElementById('confirmAlert').addEventListener('click', function () {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });
  });
  