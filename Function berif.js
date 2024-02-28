function one()
{
    const userName = "Utkarsh"
    function two()
    {
        const website  = 'youtube'
        console.log(userName); // Utkarsh
    }

    //console.log(website); // ! ReferenceError: website is not defined

    two()
}


one()