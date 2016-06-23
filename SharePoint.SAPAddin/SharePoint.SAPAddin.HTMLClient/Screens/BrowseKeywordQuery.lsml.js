/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.BrowseKeywordQuery.ProductPicUrl_postRender = function (element, contentItem) {
    // Write code here.
    contentItem.dataBind("value", function (value) {
        if (value) {
            var totalUri = "https://sapes1.sapdevcenter.com" +
                            contentItem.value;
            setTimeout(function () {
                $("img", element).attr("src", totalUri);
            }, 0);
        }
    });

};