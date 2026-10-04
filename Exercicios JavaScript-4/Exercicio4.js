const nomeReplicado = ['João', 'Maria', 'João','Pedro', 'Maria']
const nomesCorretos = [... new Set (nomeReplicado)]
console.log(nomesCorretos)