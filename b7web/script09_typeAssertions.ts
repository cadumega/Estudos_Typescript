let idadeField= document.getElementById('idade') as HTMLInputElement;

// ...

console.log(idadeField.value);   // elemento exclusivo do campo input element, o ts não tem certeza se irá funcionar direito, preciso especificar mais detalhado quem é "as..."

// value é para um tipo específico, type assertions - dar assistência ao typescript para especificar melhor. "esse elemento é um campo"