//
//  KeyChainWrapper.swift
//  DemoApp
//
//  Created by Amanpreet Singh on 12/03/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation
import SwiftKeychainWrapper

@objc(KeyChainWrapper)
class KeyChainWrapper: NSObject {
  
  @objc
     func savePassword(_ password:String,  callback:RCTResponseSenderBlock){
        if(KeychainWrapper.standard.set(password, forKey: "password")){
          callback([true])
        }
        else{
          callback([false])
        }
    }
  
  @objc
   func getPassword(_ callback:RCTResponseSenderBlock){
    if let passwod = KeychainWrapper.standard.string(forKey: "password"){
        callback([passwod])
      }
      else{
        callback([NSNull()])
      }
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
