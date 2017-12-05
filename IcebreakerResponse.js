function IcebreakerResponse(email){
  this.email = email
}

IcebreakerResponses.BatchCreate(arr) {
  return arr.map(function(emailEach) {
    return IcebreakerResponse(emailEach);
  })
}