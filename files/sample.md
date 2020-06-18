<a name="addNumbers"></a>


## addNumbers

_addNumbers(firstNumber, secondNumber) ⇒ <code>Number</code>_

example function to add to numbers

**Kind**: global function  
**Returns**: <code>Number</code> - the result  
**Testcase**: two valid integers  


@flowstart
 start=>start: START
end=>end: END
opValorInicial=>operation: comunaDestino = null
comunaConExhorto=>condition: Esta comuna tiene exhorto
opAsignarValor=>operation: comunaDestino = 'La Comuna'

start->opValorInicial->comunaConExhorto
comunaConExhorto(yes)->opAsignarValor->end
comunaConExhorto(no)->end  
@flowend

   

| Param | Type | Description |
| --- | --- | --- |
| firstNumber | <code>Number</code> | the first number to add |
| secondNumber | <code>Number</code> | the second number to add |

**Example**  
```js
addNumbers(1, 2) //-> 3
```
**Example**  
```js
addNumbers(2, 18) //-> 20
```
