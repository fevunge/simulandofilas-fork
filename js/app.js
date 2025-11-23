// const normalQueue = [];
// const priorityQueue = [];
// const highPriorityQueue = [];

const formPerson = document.getElementById('person-values');
const addPersonButton = document.getElementById('add-person-button');
const uploadCsvButton = document.getElementById('upload-csv-button');
const csvFileInput = document.getElementById('csv-file');
const csvFileLabel = document.getElementById('csv-file-label');
const queueListElement = document.getElementById('unorder-queue-list-element');


formPerson.onsubmit = function (e) {
    e.preventDefault();
    alert('Person added!');
    const formData = new FormData(formPerson);
    const name = formData.get('person-name');
    const age = parseInt(formData.get('person-age'), 10);
    const hasDisability = formData.get('has-desability');
    const hasChild = formData.get('has-child');
    queueListElement.appendChild(createPersonListItem(name, age, hasDisability === 'on', hasChild === 'on'));
}

function createPersonListItem(name, age, hasDisability, hasChild) {
    const listItem = document.createElement('li');
    listItem.className = 'person-data';

    const personalDataSpan = document.createElement('span');
    personalDataSpan.className = 'person-personal-data';
    personalDataSpan.textContent = `${name} - ${age} years`;

    const statusSpan = document.createElement('span');
    statusSpan.className = 'person-status';

    if (hasDisability)
        statusSpan.innerHTML += '<img width="20px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEfklEQVR4nN2ZXYhVVRTHf340fuR4pQ/TyYgxdewDLQjpxaAXSdQsP9LGHoLCUscyk2p8lKBeeilKHSHtIRgsLSgDpdSy1CizB3PSCFIrIwvTTB0zjRX/A4vNOfce7z333jP+YcHd+6y79l57r73Xx4bqoR+wGNgNnBLtAtqABnoIrge+AS4m0NdAEzlHP6fEt8B0oFF0P9Clb3vyvjNPaqL7gULM94JTZhE5xheapO1EEh4Qj52Z3OIvTdJMKQmDxXOSHONkCkUKPUGR3ZqkHewkzBDPTnKMNk2yK+GwDwEOiGchOUaD/IRN9Dsd7MGiGU6Jr4AryDmanDJxZEoMp4egQX5ip24yo89lTrnficsCVwPLdcjPOzOy34eADuAmcozRwOvA30XORERndOBzhbuB94B/NckLwCZgUnAG+gBjpKzxnQXGUWf0BR4CvnSrbBNbA9yS4v8v6j+2AHXDg7L1SIFjwArgukuQYb6kW1SXEH6iTOeiHNoTwMAYvrsUxvcvIusHybmBOuBDDf4C0Dv4NgiYHzhA270k/CGeq6gxGmUK52QaEW4FXgVOxNxOtoNxGKrvpkzNMV2Db1d7ALAlmLglSI+4XOSaBFkT6xn1rtTg7UF2Z7nEa8B49Q9T/29FZM0Xz1rqgB81+B1qr1H7uYDvHvV/UkTWy+J5nhrjZg38K9BL9JP6op2IsFD9q4rI25Qi6aoKlmrgN9W+Xe2jUsrjFX17KsXVawtUU2zRwK1qt6u9TkHiEmA9sE83m337WZ57iQp1EfornPmnHs7wtBzhtWp/6jK/MymCRJv0G8AIxVfW932tleijVbYwfCRwpyYWTdK+dQJzgRbgSlGL4rFOt0vHtYulFD8NfFSNoPItN4DPMcycmlP83xbgnRQKhHQcuDFrr97pQnVT5uky5Dyj/5qce4vwDQU2aywzyUxhju5PCS9HCa9M5DCLVeKbpfCpEkW+S8Y6Z06VYkMKX2P4WHyPkhGGK1jszijfblYidja4mkM8LEU+IyNE5mDnJCusjznctlCPOZ4BzpzHZjHoBxI2h+zQmnBTmSP1uf4q9b+UZcBoxYNimKIY7AgwuQRvS+AYe8nBWt9MxzdBfb+oVlARohJPqdvjiFvZwyV4G8VnuUv4yrU14N2n/qnU4K2jXEUss4xQcEnZbTFndCMV4kBK05osZQ6XcHjetOyNMS6BWxk4yOjWtN8VFx0sdsoK89zhNmcbwXYiMjn/rvJuBs74/2p6Na/frkCZbTE5zTT12UtY2RihiLdbAWClGOUqMgdjlJmlvoMucStkVXnpkCCLYivFRsnq0OS7AmX6uiu/XcnYs1lVXprc7WW3SLlYJhm/u9eqOGVmuqpmRBdkYhVjmiLS82Uqs8yF8WHhIU6Z2a5vf9ZPEW0uL9mQMogc5czJVvXxBL44ZaqKqa5E2q0bqFWB3SDRWF2xb+tQR87vvhKyvTJxtCNrZcy+Vwf5exKdU1Ux7QvuMGBvgiwrfFQFlk8sUNHN7NgcmcVmduu8r7NUsyfo/wA008Y37jiCQQAAAABJRU5ErkJggg==" alt="wheelchair">';
    if (hasChild)
        statusSpan.innerHTML += '<img width="20px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEZElEQVR4nN1aWWwOURT+tLRSqkQkba2pkAgqRZo0xBoviKXEC7E+kCpe0IgQUkvQ2EnEMw8evFgipF5QlSASoUQRe9VSa5QmRk7yXTkZM/PPzD/9O/UlJ/nvvee7c87cM/ecO/MDiZEJYBWAWgDfKNcBlAPIQDtBbwB3AFguchtAPmKOTOXEPQAzAWRTZgGo49ituK/Mahp6H0COw3iOcmYlYowbNFJWwg2zqSPPTGzxlUZKKLmhG3W+IMb44sORnPbgSC2NlAfbDaXUqUGMUU4j61we9u4AHlKnDDFGBvOEGPqAD3Y3Sqly4iaATog58pUzTiJO5KGdIIN5ooY7mcg1hlPsV+K/QgmAcwA+eYRWE3VEN5aYB6DFwwG7tJATKwxQyXA3gH4eujK2RyXF/ogRDtCwEwE4J8kRbiyQDqCBRhUF4BWR08A52hwTaNDjENxH5I5HDHCQxuwKwd1FrswRBebwWH0BwFIAWX6JHQC8pDHFIS5cTO5LzpUMOqoVNvIGwBqOeaKEhGc0ZBDzxCYPzlYAbwEUkPOMcySbVxZznicANjDULXWIG+hFrqLiPra3sX3Yg3OEOqILci3OFcVqLFN9ywF8YP87ACOdyHI3n1JpLPtMdTvJ46KTqCO6INfiXB2SXI3HDrVcX3UEl2gZYieP4uBrAGkARvjcTtMZWhY5aZzD4pzJrMZSF51sFq2ic9e+CezggISKDivT9sJR6lbawk3mjHI1NHLVDduiB+xh9IBtySuJMFEdvpzCLcxqLPGhv4C6UtT2kI7h7GhkqBSq7S49YDVQyHYj2zJ30NWo97PF8hms12G4hY3jVKhk+1AAI47Ywuu407L7XI3FAa5rbD0tjatsTOOgeXs4LkRpI1zBdLavBFyNRz5Xw2CqDuObbMygM3r38gsdXlM5lznTXw5wrrFCyncxYrPDwDEEhwkvLVIV/EiBI1/BbW6vypoik0M4YsLL4lxVDJPn7JMiMGrMddohh/lMgm5I505ncS6DM+q0GTWqOPcp3bmenZLgwsKE1zrVV6aK0SAPciJIJL1wyjvme0gUIp/qDHryXCH98xEdFqqEKG8//6IHX+38SsIB4Z41mVZhJ8elLusVgRO5rIBlzo1+CMZAv203ZKkySHJLV4RHNt96WqyEO6bSEcFQAB+pL9VrHwRHX+WEbCyD/RKjdEQwWpX94tQKfnRNhM7cNJrIfR7EidZwRLDI9lxJFbGfZU0BgC6UAvYdUNu6kdoEB75Wd0QezN8R7Yy/AVS0hSNTePFmAGv5XSWPOaeZ8/ygfOP5xlQFXpzxqXbkInXFIDtMMr5k67/gg3M+1Y68p67kADtyXb4ON/ngyOaRUkfMG/48l/+8yNjnCDit7ki1Qx1mUMGx6gg4jnhF5THqnZW9La9I/cAc2poZ3/kUMein7ZSaDMcRpkbyku0IfsZ2EnPej4LzD+SLrjgjKyOJS36LyG9ZCXEi6F+c5A5KOJgvxPI70V1NyPkDgJ9T3TU+1JsAAAAASUVORK5CYII=" alt="mother">';
    listItem.appendChild(personalDataSpan);
    listItem.appendChild(statusSpan);

    return listItem;
 }