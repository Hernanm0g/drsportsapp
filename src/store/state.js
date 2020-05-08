// Initial states
const state = {
  // Una alerta de notificación custom.
  snack : {
    active:false,
    text:"Hello!!",
    color: "success"
  },
  // Un confirm custom
  confirm: {
    dialog: false,
    title:"",
    text:"",
  },
  authenticated:false,
  superAdmin:false
}

export default state
