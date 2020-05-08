// Loading
export const authenticated = (state, auth) => {
  state.authenticated = auth;
}

/*----------- Snack Bar for notifications -----------*/

export const snack = (state, {text,color}) => {
  state.snack.active = true
  if (text == "error") {
    state.snack.text = "Ha habido un error, vuelve a intentarlo."
    state.snack.color = "error"
    return
  }
  if (text == "confirm") {
    state.snack.text = "Por favor, confirma los campos en rojo."
    state.snack.color = "error"
    return
  }
  state.snack.text = text,
  state.snack.color = color
}

export const deactivateSnack = (state) => {
  state.snack.active=false;
}

/*----------- Confirm mutation -----------*/
export const confirm = (state, {title, text}) => {
  state.confirm.dialog = true,
  state.confirm.text = text,
  state.confirm.title = title
}

export const deactivateConfirm = (state) => {
  state.confirm.dialog=false;
}


/* SuperAdmin Mutation */

export const setSuperAdmin = (state, superAdmin)=>{
  state.superAdmin = superAdmin
}
