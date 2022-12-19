function showMore(id, button) {
    let style = document.getElementById(id).style;
    let show = style.display !== 'block';
    style.display = show ? 'block' : 'none';
    button.innerText = show ? 'Mutass kevesebbet' : 'Mutass többet';
}