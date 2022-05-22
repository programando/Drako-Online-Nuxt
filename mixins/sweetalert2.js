module.exports = {
  methods: {
    Message(Titulo, Message, icon, buttonText) {
      this.$swal.fire({
        title: Titulo,
        text: Message,
        icon: icon,
        confirmButtonText: buttonText,
      }) 
       
    },
  }

  }
