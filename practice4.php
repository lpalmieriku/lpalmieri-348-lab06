<!DOCTYPE html>
<html>
    <body>
        <?php
        //Prints to html the starting table border width
        echo "<table border=1>";
        //Loops through the size the user inputs to make the rows of the table
        for ($i = 1; $i <= $_POST["size"]; $i++) {
            //Prints to html the start of a table row
            echo "<tr>";
            //Loops through the size the usr input to make the elements in each row of the table
            for ($j = 1; $j <= $_POST["size"]; $j++) {
                //Calculate the product based in the row and column position
            	$product = $i*$j;
                //Prints to html the table data with the product of the row and column
                echo "<td> $product </td>";
            }
            //Prints to html the end of a table row
            echo "</tr>";
        }
        //Prints to html the end of the table
        echo "</table>";
        ?>
    </body>

</html>
