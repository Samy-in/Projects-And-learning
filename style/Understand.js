// 1) Width and height we know which starts from left to right.
// % values is compared to the size of website which are bigger values.
//
// 2) Pixels(pxs) is used to move a bit in any direction according to website.
// ****Margin = is space between two element And Padding = is space inside a one element only.****************

// there are sub-sets in margin like
// margin-left, margin-right, margin-top, margin-down
// 
// there is also mmodern way to write or give values withou mentioning above
// 3) margin = 20px 30px 46px 48px;
// this means 20px from the top,
// 30px from the right,
// 46px is from the down,     To remember all this just keep in mind that margin works in clockwise direction.
// 48px is from left,
// 
// Another ways is margin = 30px 54px;
// this means 30px is from top and bottom
// And 54px is from left and right at the same time.
// 
// 5) Padding is mostly used to push anything or words inside a div in proper sense.
// its also called as imaginary border inside element.
// 
// 6) We put url of img in style not in html but its also possible
// background-Image: url('link is inside .');
// background-size: cover;  // this is used to let image cover all the side in accurately
// background-position: center or top or left or right;   this will move image according to this. 

// 7) Position 'Absolute'= it means if three colored box is present and if you use position "Absolute" on first box then
// that box will lifted from its frame and its free to any where its wants and simultaneously the rest 2 boxes which
// was behind the first box will comes forward as per the alignment.

// 8) position "Relative" = it means if there are two squares div and one div is smaller than he other div .And if the small
// have to move then its boundary is now set with the borders of the bigger div. like it cant move beyond the shadow
// of bigger square div.

// ++++++++ Special case : If there are three boxes and you selected the second one as position 'absolute' 
// but it also has the first box init which now behave as child function to the up lifted second box. 
// And Now this second up lifted box is becomes Position 'Absolute' and Position "Relative" at the same time. +++++++++++++++++++++++

// 9) Flex box = if there are three div's of different color in vertical way so to make it show in horizontal way
// then we use display : flex
// then align-items : center or flex-start or flex-end; its moves the div's in y- directions.
// then justify-content : center or flex-start or flex-end; its moves the div's in X- directions.
// more properties like justify-content : spac-between or space-around or space-evenly.