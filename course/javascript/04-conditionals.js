// Wrong
const isUserOlderThan18Years = true
const isUserLivesOnBrazil = true

if (!isUserOlderThan18Years && !isUserLivesOnBrazil) {} 

// Right
const isUserYoungerThan18Years = false
const doesUserLivesOutsideBrazil = false

if (isUserYoungerThan18Years && doesUserLivesOutsideBrazil) {}

// Wrong
function isUserOlderThan18Years(user) {
    if (!user) {
        return { error: true }
    } else {
        return user.age >= 18
    }
}

// Right
function isUserOlderThan18Years(user) {
    if (!user) {
        return { error: true }
    }

    return user.age >= 18
}