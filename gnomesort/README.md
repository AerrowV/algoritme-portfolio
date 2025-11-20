# Gnome Sort Algorithm

### Beskrivelse
- Gnome Sort algoritmen er en sorterings-algoritme som går frem og tilbage i arrayet og hele tiden tjekker om ting står forkert

### Wikipedia-artikel
- https://en.wikipedia.org/wiki/Gnome_sort

### Pseudokode
- Start ved index 1
- Mens vi ikke er nået til enden af array:
    - Hvis index er 0 eller elmentet før er mindre eller det samme
        - Gå et skridt frem
    - Ellers
        - Byt elementet med det før
        - Gå et skridt tilbage

### Tidskompleksitet
- Gnome Sort har tidskompleksiteten O(n^2). Det er fordi algoritmen ofte ender med at gå frem og tilbage hele tiden. Hvis arrayet er usorteret , så skal den lave rigtig mange swaps og gå baglæns rigtig tit, hvilket kan tage lang tid ift, hvor stort et array man arbejder med. Den arbejder ret ineffektivt, fordi den i praksis gør det samme arbejde om og om igen.

### Anvendte links
- https://www.geeksforgeeks.org/dsa/gnome-sort-a-stupid-one/
- https://sortvisualizer.com/gnomesort/
- https://rosettacode.org/wiki/Sorting_algorithms/Gnome_sort
- https://www.tutorialspoint.com/java-program-for-gnome-sort