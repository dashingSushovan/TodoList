function onRemove(id) {
    if(confirm('Do you want to remove ?')) {
        location.href = '/removetodo?id=' + id;
    }
    
}