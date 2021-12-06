pragma solidity >=0.4.21 <0.9.0;

interface ERC721 {

    // Transfer Event
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    // Approval Evnet
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);

    // Balance Enquiry
    function balanceOf(address owner) external view returns (uint256 balance);
    // Owner Enquiry
    function ownerOf(uint256 tokenId) external view returns (address owner);
    // Transfer
    function transfer(address to, uint256 tokenId) external;
    // Approval
    function approve(address to, uint256 tokenId) external;
    // Take Ownership
    function takeOwnership(uint256 tokenId) external;
}