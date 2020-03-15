//
//  KeyChainWrapper.m
//  DemoApp
//
//  Created by Amanpreet Singh on 12/03/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"
@interface RCT_EXTERN_MODULE(KeyChainWrapper, NSObject)
RCT_EXTERN_METHOD(savePassword:(NSString*)password callback:(RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(getPassword:(RCTResponseSenderBlock)callback)

@end

